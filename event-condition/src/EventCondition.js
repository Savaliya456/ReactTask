import React, { useState } from 'react';

function EventCondition() {
    const [signIn, setsignIn] = useState(false);

    return (
        <div>
            {signIn ? (
                <>
                    <div>
                        <h4>Welcome! to our site</h4>
                        <button onClick={() => setsignIn(false)}>Log out</button>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <h4>Please Log In!</h4>
                        <button onClick={() => setsignIn(true)}>Log in</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default EventCondition;



