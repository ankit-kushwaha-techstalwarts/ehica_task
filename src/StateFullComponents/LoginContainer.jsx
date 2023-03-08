import React from 'react'
import Text from '../Components/general/Text'
import { withRouter } from 'react-router-dom'
import Stack from '../Components/general/stack'
import Button from '../Components/general/Button'
import { PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from '../config/auth'
import AuthSideView from '../Components/login/SideBar'

class LoginContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      token:''
    }
  }

  componentDidMount(){
    let authToken = localStorage.getItem("token");
    if(authToken!=null) this.props.history.push("/dashboard");
  }

  handleLogin = async ()=>{
    const myMsal = new PublicClientApplication(msalConfig);

    try{
      let loginResponse = await myMsal
      .loginPopup(loginRequest);
      const token = loginResponse.accessToken;
        this.setState({token:token})
        localStorage.setItem("token", token);
        this.props.history.push("/dashboard");

    }catch(error){
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <Stack
           direction="row"
           justifyContent="center"
           alignItems="center"
        >
        <AuthSideView/>
          
          <Stack
           direction="column"
           justifyContent="center"
           alignItems="center"
           sx={{
             position:"relative",
             right:20,
             backgroundColor:"#f3f2f1",
             padding:"20px",
              ":hover":{
                boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.75)"
              }
           }}
          
        >
          <Text sx={{
            marginBottom:"30px",
            backgroundColor:"#f3f2f1",
          }}>
            Welcome!  Please log in With your Microsoft Account
          </Text>
          <Button
            onClick={this.handleLogin}
            sx={{
              width:"100%",
              height:"50px",
              borderRadius:"10px",
              backgroundColor:"#0078d4",
              color:"white",
              fontSize:"12px",
              fontWeight:"bold",
              marginBottom:"20px",
              ":hover":{
              
                backgroundColor:"#0063b1",
                textTransform:"uppercase",
              }
            }}
          >
            Log In
          </Button>
          </Stack>
        </Stack>
      </>
    )
  }
}

export default withRouter(LoginContainer)
