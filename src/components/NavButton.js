const NavButton = ({navbutton}) => {
  return (
    <div className="w-auto d-felx">
      <a className="" href="/"> <p style={{width:"auto"}} className="rounded-pill w-auto bg-light shadow-sm text-center overflo-auto text-nowrap  py-1 px-2 mx-1">{navbutton.text}</p></a>
    </div>
  )
}

export default NavButton
