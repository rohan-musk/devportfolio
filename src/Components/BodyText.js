import React from 'react'
import Typical from 'react-typical'

const BodyText = () => {
    return (
        <div className="bodydiv">
            <h1 className="bodyh1">Digital developer from India turning ideas into reality</h1>
            <p>I am
                <Typical
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        ' a developer 👨‍💻',
                        1000,
                        ' a designer 🧑‍🎨',
                        1000,
                        ' an artist 🖌️',
                        1000
                    ]}
                />
            </p>
        </div>
    )
}

export default BodyText
