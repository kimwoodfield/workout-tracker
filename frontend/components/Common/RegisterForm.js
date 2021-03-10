import React from 'react'

export default function RegisterForm() {
    return (
        <div>
            <form action="http:/localhost:3000/register">
                <div>
                    <label for="email">Email</label><br />
                    <input type="email" placeholder="Enter email" name="email" id="email" required />
                </div>

                <div>
                    <label for="fullname">Full Name</label><br />
                    <input type="text" placeholder="Enter full name" name="fullname" id="fullname" required />
                </div>

                <div>
                    <label for="username">Username</label><br />
                    <input type="text" placeholder="Enter username" name="username" id="username" required />
                </div>

                <div>
                    <label for="password">Password</label><br />
                    <input type="password" placeholder="Enter full name" name="password" id="password" required />
                </div>

                <input type="submit" />
            </form>
        </div>
    );
};
