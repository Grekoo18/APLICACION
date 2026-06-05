import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>NexTask</h1>
      <p>“Conecta tus ideas con tus acciones. Gestión de tareas fluida, rápida y visual.”</p>
      <p>Comienza Ya¡¡¡</p>

      <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "30px" }}>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/actividades")}
        >
          Ir a Lista de Actividades
        </Button>

        <Button
          type="default"
          size="large"
          onClick={() => navigate("/estadisticas")}
        >
          Ir a Estadísticas
        </Button>
      </div>
    </div>
  );
}
