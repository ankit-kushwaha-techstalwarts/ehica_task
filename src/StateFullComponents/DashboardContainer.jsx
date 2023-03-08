import React from "react";
import { withRouter } from "react-router-dom";
import Stack from "../Components/general/stack";
import Table from "../Components/Table";
import { msalConfig } from "../config/auth";
import url from "../constants/url";
import { PublicClientApplication } from "@azure/msal-browser";
import Button from "../Components/general/Button";
import Text from "../Components/general/Text";
import AppBar from "../Components/general/AppBar";
import SearchBox from "../Components/general/SearchBox";
import { debounce } from "lodash";

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          id: 1,
          name: "Margarita",
          description:
            "Margarita is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
          image:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          price: 10,
        },
        {
          id: 2,
          name: "Zombie",
          description:
            "Zombie is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
          image:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          price: 10,
        },
        {
          id: 3,
          name: "Gin",
          description:
            "Gin is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
          image:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          price: 10,
        },
        {
          id: 4,
          name: "Fruit",
          description:
            "Fruit is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
          image:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          price: 10,
        },
        {
          id: 5,
          name: "Garden",
          description:
            "Garden is a cocktail consisting of tequila, orange liqueur, and lime juice often served with salt on the rim of the glass.",
          image:
            "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
          price: 10,
        },
      ],
      userDetails: {},
      token: "",
      counter: 0,
      filteredData: [],
      loading: false,
    };
  }

  authToken = "";

  componentDidMount() {
    let authToken = localStorage.getItem("token");
    this.authToken = authToken;
    this.getData();
  }

  handleLogout = () => {
    const myMsal = new PublicClientApplication(msalConfig);
    myMsal
      .logoutPopup()
      .then(function (logoutResponse) {
        this.setState({ token: "" });
        localStorage.removeItem("token");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  inputSearchHandler = (e) => {
    const value = e;
    this.setState({ loading: true });
    const filteredData = this.state.dataList.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ filteredData: filteredData , counter: filteredData.length});
    this.setState({ loading: false });
  };

  getData = async () => {
    this.setState({ loading: true });
    const dataList = this.state.dataList;
    this.setState({ filteredData: dataList });
    this.setState({ loading: false });
  };

  columns = [
    { field: "id", headerName: "id" },
    {
      field: "name",
      headerName: "Name",
      valueGetter: (v) => {
        return <Text>{v ?? "N/A"}</Text>;
      },
    },
    {
      field: " description",
      headerName: "Description",
    },
    {
      field: "image",
      headerName: "Image",
      valueGetter: (v) => {
        return <img src={v} alt="img"
        height="100px"
        width="100px"
        />;
      },
    },
    {
      field: "price",
      headerName: "Price",
      valueGetter: (v) => {
        return <Text>{v ?? "N/A"}</Text>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      valueGetter: (v) => {
        return (
          <Button color="secondary" variant="contained">
            Buy
          </Button>
        );
      },
    },
  ];

  render() {
    return (
      <>
        {this.state.userDetails?.displayName ? (
          <Text sx={{ fontSize: 24, mt: 10, ml: 3 }}>
            Hello {this.state.userDetails?.displayName}
          </Text>
        ) : null}
        <Stack justifyContent="center" alignItems="center" padding={10}>
          <AppBar
            style={{
              background: "red",
              padding: "10px",
            }}
            position="sticky"
            elevation={0}
            boxShadow={1}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                sx={{
                  fontWeight: "bold",
                  fontSize: 24,
                }}
              >
                Order Pizza
              </Text>
              <SearchBox onInputChange={this.inputSearchHandler} />
              <Button
                color="secondary"
                variant="contained"
                onClick={this.handleLogout}
              >
                Sign out
              </Button>
            </Stack>
          </AppBar>

          {this.state.loading ? (
            <Text>Loading Data...</Text>
          ) : (
            <Table
              columns={this.columns}
              data={this.state.filteredData}
              dataChangedCounter={this.state.counter}
              sx={{
                // minWidth: "400px",
                marginTop: "10px",
              }}
              th_sx={{
                p: "1px 10px",
                backgroundColor: "#F1F1F1",
                color: "#808591",
                borderRight: "1px solid #F1F1F1",
                fontWeight: "unset",
                fontSize: "12px",
              }}
              td_sx={{
                p: "10px",
                borderRight: "1px solid #F1F1F1",
                borderBottom: "none",
                fontSize: "14px",
                fontWeight: "500",
              }}
            />
          )}
        </Stack>
      </>
    );
  }
}

export default withRouter(DashboardContainer);
