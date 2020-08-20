import React from 'react'

const Header = () => {
    const sayHi = 'Hi'
    const name = 'Mike'

    return(
        <header className="App-header">
            { `${sayHi} ${name}!`}
        </header>
    )
 }

 export default Header;