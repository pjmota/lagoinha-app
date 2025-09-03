import { Card, Button } from "react-bootstrap";
import React from "react";

interface CustomCardProps {
  image: string;
  title: string;
  text: string[];
  buttonLabel: string;
  icon: React.ReactNode;
}

const CustomCard: React.FC<CustomCardProps> = ({
  image,
  title,
  text,
  buttonLabel,
  icon,
}) => {
  return (
    <Card className="text-center rounded-0 card-dark-overlay border-0 text-white">
      {/* Background apenas na div */}
      <div
        className="card-background"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Conteúdo do card */}
      <Card.Body className="card-grid-inner">
        {/* Ícone */}
        <div>{icon}</div>

        {/* Texto centralizado */}
        <div className="text-center card-text-container">
          <Card.Title className="card-title-custom">{title}</Card.Title>
          <Card.Text className="card-text-custom">
            {text.map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </Card.Text>
        </div>

        {/* Botão */}
        <Button variant="primary" size="sm">
          {buttonLabel}
        </Button>
      </Card.Body>
    </Card>

  );
};

export default CustomCard;