import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import config from "../config";
import liff from "@line/liff";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBAnimation,
  MDBBtn,
} from "mdbreact";

const RegisterPage = () => {
  const history = useHistory();
  const [userid, setUserID] = useState("0");
  const [pname, setPname] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [idcard, setIDcard] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const [government, setGovernment] = useState("โรงพยาบาลร้อยเอ็ด");
  const [phone, setPhoneNumber] = useState("");

  const CheckUser = async (userId) => {
    const base_url = `${config.main_config.APP_URL}/user`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    await axios
      .post(base_url, { userid: userId }, { headers: header })
      .then((resp) => {
        if (resp.data.data.length > 0) {
          localStorage.setItem(
            "user",
            JSON.stringify(resp.data.data[0].data_info)
          );
          history.push("/reh-1meeting-app");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    const formData = {
      userid: userid,
      idcard: idcard,
      pname: pname,
      fname: fname,
      lname: lname,
      email: email,
      position: position,
      department: department,
      government: government,
      phone: phone,
    };
    const base_url = `${config.main_config.APP_URL}/user/register`;
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.main_config.TOKEN_APP}`,
    };
    axios.post(base_url, formData, { headers: header }).then((resp) => {
      if (resp.data.code === 200) {
        localStorage.setItem("user", JSON.stringify(resp.data.data.token));
        Swal.fire({
          title: "บันทึกข้อมูลเรียบร้อย",
          text: "กรุณารอสักครู่...",
          icon: "success",
        });
        history.push("/reh-1meeting-app");
      } else if (resp.data.code === 400) {
        Swal.fire({
          title: "แจ้งเตือน",
          text: resp.data.msg,
          icon: "warning",
        });
      } else {
        Swal.fire({
          title: "แจ้งเตือน",
          text: resp.data.error,
          icon: "error",
        });
      }
    });
  };
  const InitailizeLiff = () => {
    liff.init(
      {
        liffId: "1655384297-9EroMoWn",
      },
      () => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then((profile) => {
            setUserID(profile.userId);
            CheckUser(profile.userId);
          });
        }else{
          alert("No login!")
        }
      },
      (err) => console.log(err)
    );
    // const profile = localStorage.getItem("profile-line");
    // const getProfile = JSON.parse(profile);
    // if (getProfile !== null) {
    //   setUserID(getProfile.userId);
    //   CheckUser(getProfile.userId);
    // }else{
    //   localStorage.removeItem("profile-line");
    // }
  };
  useEffect(() => {
    InitailizeLiff();
  });
  return (
    <div>
      <MDBEdgeHeader
        color="red lighten-5"
        className="sectionPage"
        style={{ height: 100 }}
      />
      <div className="mt-3 mb-5">
        <MDBAnimation type="zoomIn" duration="500ms">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  {"USERID : " + userid}
                  <MDBCol md="12">
                    <h5 className="text-primary">ลงทะเบียนผู้ใช้งานใหม่</h5>
                    <form className="needs-validation" onSubmit={submitHandler}>
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="pname" className="grey-text">
                            คำนำหน้า <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setPname(text.target.value)}
                            type="text"
                            value={pname}
                            className="form-control"
                            name="pname"
                            required
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="fname" className="grey-text">
                            ชื่อ <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setFname(text.target.value)}
                            type="text"
                            value={fname}
                            className="form-control"
                            name="fname"
                            required
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="lname" className="grey-text">
                            นามสกุล <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setLname(text.target.value)}
                            type="text"
                            value={lname}
                            className="form-control"
                            required
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="email" className="grey-text">
                            เลขบัตรประชาชน{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setIDcard(text.target.value)}
                            type="number"
                            value={idcard}
                            className="form-control"
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="email" className="grey-text">
                            อีเมล <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setEmail(text.target.value)}
                            type="email"
                            value={email}
                            className="form-control"
                          />
                          <small
                            id="emailHelp"
                            className="form-text text-muted"
                          >
                            อีเมลที่สามารถติดต่อได้จริง
                          </small>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="position" className="grey-text">
                            ตำแหน่ง <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) => setPosition(text.target.value)}
                            type="text"
                            value={position}
                            className="form-control"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="department" className="grey-text">
                            หน่วยงาน <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) =>
                              setDepartment(text.target.value)
                            }
                            type="text"
                            value={department}
                            className="form-control"
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="main_company" className="grey-text">
                            ส่วนราชการ <span className="text-danger">*</span>
                          </label>
                          <input
                            onChange={(text) =>
                              setGovernment(text.target.value)
                            }
                            type="text"
                            value={government}
                            className="form-control"
                            readOnly
                          />
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label htmlFor="phone_number" className="grey-text">
                            เบอร์โทร
                          </label>
                          <input
                            onChange={(text) =>
                              setPhoneNumber(text.target.value)
                            }
                            type="text"
                            value={phone}
                            className="form-control"
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBBtn gradient="blue" type="submit">
                        บันทึก
                      </MDBBtn>
                    </form>
                  </MDBCol>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
        </MDBAnimation>
      </div>
    </div>
  );
};

export default RegisterPage;
