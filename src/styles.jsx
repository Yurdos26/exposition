const wrapperStyle = {
  wrapper: {
    width: "100%",
    fontFamily: "Times New Roman, Verdana, Arial, sans-serif",
    fontSize: 18,
    padding: 16,
    boxSizing: "border-box",
    textAlign: "center",
  },
};

const navStyle = {
  nav: {
    textAlign: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  navLink: {
    flexBasis: "100",
    flexShrink: "1",
    margin: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 22 /*размер шрифта на кнопках*/,
  },
};

const pageStyle = {
  table: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  row: {
    width: "100%",
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  column: {
    flexBasis: "50%",
    flexShrink: 1,
    flexGrow: 0,
    marginLeft: 10,
    marginRight: 10,
  },
};

export { wrapperStyle, navStyle, pageStyle };
