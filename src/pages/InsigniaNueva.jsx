import React from "react";
import LogoHeader from "../images/Raster.png";
import "../components/styles/insigniaNueva.css";
import InsigniaFormulario from "../components/InsigniaFormulario.jsx";

class InsigniaNueva extends React.Component {
  state = {
    form: {
      email: "",
      password: ""
    }
  };
  handleChange = (e) => {
    const nextFormulario = this.state.form;
    nextFormulario[e.target.name] = e.target.value;
    this.setState({
      form: nextFormulario
    });
  };

  render() {
    return (
      <div class="h-100 my-4">
        <div className="Navbar">
          <div className="container-fluid"></div>
        </div>

        <div class="row mt-4">
          <div class="col-md-6 mx-auto d-flex justify-content-center mt-4">
            <img src={LogoHeader} alt="" srcset="" />
          </div>

          <div className="container">
            <div className="row">
              <div className="col- mx-autol- mx-auto d-f d-flex justify-content-center mtex justify-content-center mt-44"></div>
              <div className="col-md-12 mx-autol-md-12 mx-auto d-flex flex-wrap align-midd d-flex flex-wrap align-middle pe p-6">
                <InsigniaFormulario
                  onChange={this.handleChange}
                  formValues={this.state.form}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default InsigniaNueva;
