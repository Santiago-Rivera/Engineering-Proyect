import "./Styles/portafolio.css"

const dataPortafolio = [
  {
    id: 1,
    name: "ORDINARIO I 2025 LAS AGUAS",
    subject: "INGENIERIA DE SOFTWARE(COM350)",
    schedule: "19:45 A 21:00 LUNES Y MIERCOLES",
    parallel: "01",
    classroom: "Lab: 2 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 2,
    name: "ORDINARIO II 2025 LAS AGUAS",
    subject: "PROGRAMACION AVANZADA(COM450)",
    schedule: "20:00 A 21:15 MARTES Y JUEVES",
    parallel: "02",
    classroom: "Lab: 3 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 3,
    name: "ORDINARIO III 2025 LAS AGUAS",
    subject: "BASES DE DATOS(COM550)",
    schedule: "18:30 A 19:45 LUNES Y MIERCOLES",
    parallel: "03",
    classroom: "Lab: 4 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 4,
    name: "ORDINARIO IV 2025 LAS AGUAS",
    subject: "REDES DE COMPUTADORAS(COM650)",
    schedule: "19:00 A 20:15 MARTES Y JUEVES",
    parallel: "04",
    classroom: "Lab: 5 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 5,
    name: "ORDINARIO V 2025 LAS AGUAS",
    subject: "SISTEMAS OPERATIVOS(COM750)",
    schedule: "18:00 A 19:15 LUNES Y MIERCOLES",
    parallel: "05",
    classroom: "Lab: 6 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 6,
    name: "ORDINARIO VI 2025 LAS AGUAS",
    subject: "DESARROLLO WEB(COM850)",
    schedule: "20:30 A 21:45 MARTES Y JUEVES",
    parallel: "06",
    classroom: "Lab: 7 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 7,
    name: "ORDINARIO VII 2025 LAS AGUAS",
    subject: "INTELIGENCIA ARTIFICIAL(COM950)",
    schedule: "19:30 A 20:45 LUNES Y MIERCOLES",
    parallel: "07",
    classroom: "Lab: 8 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  },
  {
    id: 8,
    name: "ORDINARIO VIII 2025 LAS AGUAS",
    subject: "APLICACIONES MOVILES(COM1050)",
    schedule: "18:15 A 19:30 MARTES Y JUEVES",
    parallel: "08",
    classroom: "Lab: 9 JOBS",
    imageUrl: "https://educalinks.tecnologicoargos.edu.ec/altair/assets/img/images/user-m.png"
  }
]
export const Portafolio = () => {
  return (
    <div className="inicio">
      <main className="main">
        {dataPortafolio.map((item) => (
          <section key={item.id}>
            <div className="card">
              <div className="portafolio-header border-botton">
                <div className="portafolio-img">
                  <img className="img-portafolio"
                  src={item.imageUrl} alt="" />
                </div>
                <h3>{item.name}</h3>
              </div>
              <div className="info">
                <div className="border-botton">
                  <strong className="color-celeste">Materia</strong>
                  <p>{item.subject}</p>
                </div>
                <div className="border-botton">
                  <strong className="color-celeste">Horario</strong>
                  <p>{item.schedule}</p>
                </div>
                <div className="portafolio-info">
                  <strong className="color-celeste">Paralelo:</strong>
                  <p>{item.parallel}</p>
                  <p> - </p>
                  <strong className="color-celeste">Aula</strong>
                  <p>{item.classroom}</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};
