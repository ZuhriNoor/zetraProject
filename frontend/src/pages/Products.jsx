import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/Products.css";
import { FaSearch } from "react-icons/fa";
import Layout from "../components/Layout/Layout";

const Menu = () => {
  const menu = [
    {
      id: 1,
      title: "Alienware",
      image:
        "https://imgs.search.brave.com/yufH-Wv25VJu-fZVm7IvnUy_r02zxoYsK7_iC7KYaTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTIvQWxp/ZW53YXJlLUxhcHRv/cC1QTkctUGljdHVy/ZS5wbmc",
      brand: "Dell",
      price: "Rs.99,000",
    },
    {
      id: 2,
      title: "Tuf",
      image:
        "https://imgs.search.brave.com/04Aoc9-NU6USfCE70gpBwP8xO9EdGOmsfbeedk8o-GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2xhcHRvcC1w/bmctaGQtZm9yLXdv/cmstdXNlLWl0LWFz/LWEtbm9ybWFsLWxh/cHRvcC1mb3ItZ2Ft/ZXMtdHVybi1pdC1p/bnRvLTY1Ny5wbmc",
      brand: "Asus",
      price: "Rs.59,000",
    },
    {
      id: 3,
      title: "Legion",
      image:
        "https://imgs.search.brave.com/yufH-Wv25VJu-fZVm7IvnUy_r02zxoYsK7_iC7KYaTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTIvQWxp/ZW53YXJlLUxhcHRv/cC1QTkctUGljdHVy/ZS5wbmc",
      brand: "Lenovo",
      price: "Rs.69,000",
    },
    {
      id: 4,
      title: "Macbook Air",
      image:
        "https://imgs.search.brave.com/yufH-Wv25VJu-fZVm7IvnUy_r02zxoYsK7_iC7KYaTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTIvQWxp/ZW53YXJlLUxhcHRv/cC1QTkctUGljdHVy/ZS5wbmc",
      brand: "Apple",
      price: "Rs.89,000",
    },
    {
      id: 5,
      title: "Surface Laptop 4",
      image:
        "https://imgs.search.brave.com/yufH-Wv25VJu-fZVm7IvnUy_r02zxoYsK7_iC7KYaTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTIvQWxp/ZW53YXJlLUxhcHRv/cC1QTkctUGljdHVy/ZS5wbmc",
      brand: "Microsoft",
      price: "Rs.79,000",
    },
    {
      id: 6,
      title: "Inspiron",
      image:
        "https://imgs.search.brave.com/yufH-Wv25VJu-fZVm7IvnUy_r02zxoYsK7_iC7KYaTY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTIvQWxp/ZW53YXJlLUxhcHRv/cC1QTkctUGljdHVy/ZS5wbmc",
      brand: "Dell",
      price: "Rs.49,000",
    },
    // Add more products here
  ];

  const [index, setIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 6 : 0));
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex < menu.length - 6 ? prevIndex + 6 : prevIndex
    );
  };

  const filteredMenu = menu.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="bdy">
        <div style={{ margin: "50px" }}>
          <Container>
            <div className="search-bar">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search in Laptops"
                />
                <FaSearch className="search-icon" />
              
            </div>

            <Row>
              {filteredMenu.slice(index, index + 6).map((e) => (
                <Col key={e.id}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      style={{ height: "150px" }}
                      src={e.image}
                    />
                    <Card.Body>
                      <Card.Title>{e.title}</Card.Title>
                      <Card.Text>{e.brand}</Card.Text>
                      <Card.Title>{e.price}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="carousel-buttons">
              <Button
                variant="secondary"
                onClick={handlePrev}
                disabled={index === 0}
              >
                Prev
              </Button>
              <Button
                variant="secondary"
                onClick={handleNext}
                disabled={index >= filteredMenu.length - 6}
              >
                Next
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
