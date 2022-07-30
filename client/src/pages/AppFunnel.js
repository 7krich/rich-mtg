import React from 'react';

const AppFunnel = () => {

    return (
        <div className="app-container">
            <div className="app">
                <h3 className="app-form-title">
                    Helpful Information
                </h3>
                <form className="flex app-form">
                    <input
                        className="form-input"
                        placeholder="State"
                        name="State"
                        type="State"
                        id="state"
                    />
                    <input
                        className="form-input"
                        placeholder="Last Name"
                        name="Last Name"
                        type="Last Name"
                        id="lastName"
                    />
                    <input
                        className="form-input"
                        placeholder="E-Mail"
                        name="email"
                        type="email"
                        id="email"
                    />
                    <button className="sub-btn x-pad" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AppFunnel;