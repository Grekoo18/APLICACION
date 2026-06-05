import { Menu } from "antd";
import { HomeOutlined, AppstoreOutlined, BarChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#001529",
        padding: "0 20px"
      }}
    >
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ backgroundColor: "#001529", flex: 1 }}
      >
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="actividades" icon={<AppstoreOutlined />}>
          <Link to="/actividades">Actividades</Link>
        </Menu.Item>
        <Menu.Item key="estadisticas" icon={<BarChartOutlined />}>
          <Link to="/estadisticas">Estadísticas</Link>
        </Menu.Item>
      </Menu>

      <img src={logo} alt="Logo del sistema" style={{ height: "48px", marginLeft: "20px" }} />
    </div>
  );
}

export default Navbar;
