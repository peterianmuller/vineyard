export default {
  flexbox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },

  innerCol: {
    flexDirection: 'column',
    order: 1,
    flexGrow: 1,
    margin: '5em 1em 1em 2em', 
    width: '100%',
  },

  leftSideBar: {
    order: -10 ,
    height: '100%',
    zIndex: 2,
    width: '7em',
  },

  mainNavBar: {
    zIndex: 1,
    backgroundColor: 'rgb(114, 47, 55)',
  },
  
  leftSideBarInner: { 
    width: '7em',
  },

  logo: {
    backgroundColor: 'rgb(114, 47, 55)',
    fontFamily: 'Parisienne',
    fontSize: '2em',
  },

}
