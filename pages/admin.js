import Head from "next/head";
import styled from "styled-components";
import IconNavBar from "../components/Navigation/IconNavBar";
import PageTitle from "../components/PageTitle";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Spinner from "../components/Common/Spinner";
import { ImBin } from "react-icons/im";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { config } from "../components/Common/constants"

const EmptyPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
const Padding = styled.div`
  height: 4rem;
`;
const MenuItems = styled.div`
  width: 100%;
  padding-bottom: 6.5rem;
  overflow: scroll;
  height: 80vh;
`;

export default function Admin() {
  const router = useRouter();

  const [isAdmin, setIsAdmin] = useState(false);
  const [users, setUsers] = useState([]);
  const [viewUsers, setViewUsers] = useState("View all users");
  const [displayUsers, setDisplayUsers] = useState(false);

  const adminCheck = () => {
    fetch(config.url.API_ISADMIN, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        console.log(res.status);
        switch (res.status) {
          case 400:
            console.log("400 error");
            break;
          case 401:
            console.log("401 error, user is unauthorized");
            setIsAdmin(false);
            router.push("/");
            break;
          case 403:
            console.log("403 error");
            router.back();
            break;
          case 500:
            console.log("500 error");
            router.push("/");
            break;
          case 200:
            setIsAdmin(true);
            console.log("the response code was ", res.status);
            break;
        }
      })
      .catch((err) => {
        console.log("fetch failed");
        console.log(err);
      });
  };
  adminCheck();

  const fetchUsers = async () => {
    console.log("before the fetch");
    const res = await fetch(config.url.API_USERS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log("after the fetch");
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const body = await res.json();

    console.log(body);

    console.log(body.users);
    let allUsers = body.users;
    setUsers(allUsers);
    setViewUsers("Hide all users");
    setDisplayUsers(true);
  };

  const toggleUsers = () => {
    if (displayUsers === true) {
      setViewUsers("View all users");
      setDisplayUsers(false);
    } else {
      fetchUsers();
      setViewUsers("Hide all users");
      setDisplayUsers(true);
    }
  };

  const deleteUser = (username) => {
    async function doDelete() {
      const res = await fetch(config.url.API_USERS, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
        credentials: "include",
      });

      if (!res.ok) {
        const message = `An error has occured: ${response.data}`;
        throw new Error(message);
      }

      const body = await res.json();
      console.log(body);
      fetchUsers();
    }
    doDelete();
  };

  const changeRole = (username) => {
    console.log("before the PATCH fetch");
    async function doChangeRole() {
      const res = await fetch(config.url.API_USERS, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
        credentials: "include",
      });

      if (!res.ok) {
        const message = `An error has occured: ${response.data}`;
        throw new Error(message);
      }

      const body = await res.json();
      console.log(body);
      fetchUsers();
    }
    doChangeRole();
  };

  const prompt = (username) => {
    confirmAlert({
      title: "Are you sure?",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteUser(username),
        },
        {
          label: "No",
          // onClick: () => alert("Click No"),
        },
      ],
    });
  };

  return isAdmin ? (
    <div className="max-w-full">
      <Head>
        <title>Admin Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Padding />
      <PageTitle name="Admin Panel" />

      <MenuItems>
        <div className="flex flex-col self-auto p-5">
          <button
            className="rounded-sm text-white bg-blue-400 p-2 hover:bg-blue-700 hover:text-white"
            onClick={() => {
              toggleUsers();
            }}
          >
            {viewUsers}
          </button>

          {displayUsers ? (
            <div className="grid lg:grid-cols-4 grid-cols-3 mt-5 border border-gray-300">
              <div className="font-bold p-2">Name</div>
              <div className="font-bold p-2 text-center">Username</div>
              <div className="font-bold p-2 text-center">Role</div>
              <div className="font-bold hidden lg:block p-2 lg:text-center">
                Actions
              </div>
              {users.map((user, index) => (
                <>
                  <div className="p-2 border-t-2 ">{user.full_name}</div>
                  <div className="p-2 border-t-2 text-center">
                    {user.username}
                  </div>
                  <div className="p-2 border-t-2 text-center">{user.role}</div>
                  <div className="col-span-3 lg:col-span-1 col-start-1 lg:col-start-4 text-center mb-5 py-2 lg:border-t-2 lg:text-center">
                    <button
                      className="rounded-md text-white bg-red-400 p-2 hover:bg-red-700 hover:text-white mr-2"
                      onClick={() => changeRole(user.username)}
                    >
                      {user.role === "Admin" ? "Demote" : "Promote"}
                    </button>
                    {user.role === "Admin" ? (
                      <></>
                    ) : (
                      <button
                        className="rounded-md text-white bg-blue-400 p-2 hover:bg-blue-700 hover:text-white ml-2"
                        onClick={() => prompt(user.username)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </MenuItems>
      <IconNavBar />
    </div>
  ) : (
    <EmptyPage>
      <Spinner />
    </EmptyPage>
  );
}
