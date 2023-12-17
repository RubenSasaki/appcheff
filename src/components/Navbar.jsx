
const Navbar = () => {
    return(
        <>
        <header 
id="landing-header"
className='z-40 text-white py-6 px-10 flex items-center fixed top-0 w-full justify-between'>
    <div className='flex flex-grow basis-0'>
        {/*<Logo />*/}
        <h2 className='text-white pt-40 text-[40px] font-medium'>cheff.io</h2> 
          </div>

  <div className='navbar'>
    <div className='navbar-start'>
      <div className='dropdown'>
        <label tabindex='0' class='btn btn-ghost swap swap-rotate lg:hidden'>
          
  <input type='checkbox' />
           
          <svg className='swap-off fill-current' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'><path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z'/></svg>
  
         
        <svg className='swap-on fill-current' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 512 512'><polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49'/></svg>
  </label>
        
        <ul tabindex='0' class='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul className='p-2'>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className='btn btn-ghost normal-case text-xl'>CHEFF.IO</a>
    </div>
    <div className='navbar-center hidden lg:flex'>
      <ul className='menu menu-horizontal px-1 flex text-sm [&>lia]:transition-colors [&>lia]:duration-500 [&>lia]:text-current [&>lia]:font-medium [&>lia]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
        <li><a href='index.html'>Inicio</a></li>
        <li tabindex='0'>
          <details>
            <summary>Parent</summary>
            <ul class='p-2'>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a href=''>Recetas</a></li>
      </ul>
    </div>
 
    <div className='navbar-end hidden lg:flex'>
      <ul className='menu menu-horizontal px-1 flex text-sm [&>lia]:transition-colors [&>lia]:duration-500 [&>lia]:text-current [&>lia]:font-medium [&>lia]:inline-block [&>li>a]:px-4 [&>li>a]:py-2'>
        <li><a>Contacto</a></li>
        <li tabindex='0'>
          <details>
            <summary>Parent</summary>
            <ul className='p-2'>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Cuenta</a></li>
      </ul>
    </div>

  </div>
 
    <div id='menu-backdrop'
    className={`
          absolute bg-black/5 backdrop-blur-lg rounded
      translate-x-[var(--left)] translate-y-[var(--top)]
      left-0 top-0
      w-[var(--width)] h-[var(--height)]
      transition-all duration-500
      ease-in-out opacity-0 -z-10`} >

    </div>
</header>

        </>
    );

};
export default Navbar;