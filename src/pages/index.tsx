import { 
  Container, 
  Navbar, 
  Nav, 
  Carousel,
  Button, 
  Row, 
  Col 
} from 'react-bootstrap';
import Image from 'next/image';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import gc1 from '../assets/gc1.jpg';
import batismo1 from '../assets/batismo1.jpg';
import membro1 from '../assets/membro1.jpg';
import voluntarios from '../assets/voluntarios.jpg';
import HouseCustomIcon from "@/components/customIcons/houseCustomIcon";
import TwoHandsCustomIcon from "@/components/customIcons/twoHandsCustomIcon";
import WaveCustomIcon from "@/components/customIcons/waveCustomIcon"
import CustomCard from '@/components/customCar';

const cardsData = [
  {
    image: gc1.src,
    title: "GC's",
    text: ["GC's são grupos de", "crescimento.", "Encontre o seu grupo:"],
    buttonLabel: "Ver mais",
    icon: <HouseCustomIcon />,
  },
  {
    image: membro1.src,
    title: "SEJA MEMBRO",
    text: ["Quer se tornar um membro de", "Lagoinha Piracicaba?", ""],
    buttonLabel: "QUERO",
    icon: <TwoHandsCustomIcon />,
  },
  {
    image: batismo1.src,
    title: "BATISMO",
    text: ["Quer se batizar?", "", ""],
    buttonLabel: "QUERO",
    icon: <WaveCustomIcon />,
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
        className="custom-navbar"
      >
        <Container className="navbar-container">
          <Navbar.Brand href="#" className="navbar-brand">
            LAGOINHA PIRACICABA
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="navbar-links">
              <Nav.Link href="#quem-somos">QUEM SOMOS</Nav.Link>
              <div className="nav-separator" />
              <Nav.Link href="#cultos">CULTOS</Nav.Link>
              <div className="nav-separator" />
              <Nav.Link href="#gcs">GCs</Nav.Link>
              <div className="nav-separator" />
              <Nav.Link href="#dizimos">DÍZIMOS E OFERTAS</Nav.Link>
              <div className="nav-separator" />
              <Nav.Link href="#cursos">CURSOS</Nav.Link>
              <div className="nav-separator" />
              <Nav.Link href="#contato">CONTATO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carrossel */}
      <Carousel>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={carousel1}
            alt="Primeiro slide"
            layout="responsive" 
            width={carousel1.width}
            height={carousel1.height}
          />
          <Carousel.Caption className="caption-centralizada">
            <h3>
              Seja bem vindo!
            </h3>
            {/* <p>Mensagem inspiradora e acolhedora.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={carousel2}
            alt="Segundo slide"
            layout="responsive" 
            width={carousel2.width}
            height={carousel2.height}
          />
          <Carousel.Caption className="caption-centralizada">
            <h3>Família pra pentercer!</h3>
            {/* <p>Mensagem inspiradora e acolhedora.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={carousel3}
            alt="Terceiro slide"
            layout="responsive" 
            width={carousel3.width}
            height={carousel3.height}
          />
          <Carousel.Caption className="caption-centralizada">
            <h3>Lugar de novos começos!</h3>
            {/* <p>Mensagem inspiradora e acolhedora.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Cards de Ação */}
      <Container fluid className="p-0 m-0">
        <Row xs={3} md={3} className="g-0 m-0">
          {cardsData.map((card, index) => (
          <Col key={index}>
            <CustomCard {...card} />
          </Col>
        ))}
        </Row>
      </Container>

      {/* Banner Voluntários */}
      <div
        className="banner-voluntarios"
        style={{ backgroundImage: `url(${voluntarios.src})` }}
      >
        <h2>FAÇA PARTE DO NOSSO <br /> TIME DE VOLUNTÁRIOS!</h2>
        <Button variant="warning" className="mt-3">QUERO FAZER PARTE!</Button>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>LAGOINHA ALPHAVILLE</h5>
              <p>Rua Rente Feijó, 1209 - Bairro Alemães - Piracicaba/SP</p>
            </Col>
            <Col md={6} className="text-md-end">
              <a href="#" className="text-white me-2">Instagram</a>
              <a href="#" className="text-white me-2">YouTube</a>
              <a href="#" className="text-white">Facebook</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}