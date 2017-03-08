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
    marginLeft: '3em',
    zIndex: 1,
    backgroundColor: '#fafafa',
    fontFamily: 'Parisienne',
  },
  
  leftSideBarInner: { 
    width: '7em',
  },

  logo: {
    backgroundColor: 'rgb(114, 47, 55)',
    fontFamily: 'Parisienne',
    paddingBottom: '0.4em',
  },

  img: {
    paddingBottom: '0.6em',
  },
}
