import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'; // Changed to NavLink

const Products = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Mossent",
      path: "/products/mossent-repellant", // Full path
      description: "Natural Mosquito Repellent",
      price: "Rs. 500",
      image: "1.png"
    },
    {
      id: 2,
      name: "Activ-P",
      path: "/products/activ-p-pain-relief-oil",
      description: "Pain Relief Oil",
      price: "Rs. 800",
      image: "1.png"
    },
    {
      id: 3,
      name: "Zest",
      path: "/products/zest-trace-same-rate",
      description: "Trace Same Rate",
      price: "Rs. 600",
      image: "1.png"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(sectionRef.current);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`products-section ${inView ? 'in-view' : ''}`}
    >
      <style>
        {`
          .products-section {
            max-width: 1200px;
            margin: 6rem auto;
            padding: 0 1rem;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
          }

          .products-section.in-view {
            opacity: 1;
            transform: translateY(0);
          }

          .section-title {
            font-size: 2.8rem;
            font-weight: 700;
            color: #44c2c7;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: #44c2c7;
            border-radius: 2px;
          }

          .section-subtitle {
            font-size: 1.2rem;
            color: #555;
            margin-top: 2.5rem;
            font-weight: 500;
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2.5rem;
          }

          .product-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            opacity: 0;
            transform: translateY(20px);
            display: flex;
            flex-direction: column;
          }

          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(68, 194, 199, 0.2);
          }

          .product-image-container {
            height: 200px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f5fdfd 0%, #e6f9f9 100%);
            padding: 1.5rem;
          }

          .product-image {
            max-height: 150px;
            max-width: 100%;
            object-fit: contain;
            transition: transform 0.5s ease;
          }

          .product-card:hover .product-image {
            transform: scale(1.05);
          }

          .product-content {
            padding: 1.8rem;
            text-align: center;
          }

          .product-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #2a2a2a;
            margin-bottom: 1rem;
          }

          .product-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            margin-bottom: 1.5rem;
            min-height: 50px;
          }

          .product-price {
            font-size: 1.6rem;
            font-weight: 700;
            color: #44c2c7;
            margin-bottom: 1.5rem;
          }

          .button-group {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }

          .view-details {
            background-color: transparent;
            color: #44c2c7;
            border: 2px solid #44c2c7;
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            text-decoration: none;
          }

          .view-details:hover {
            background-color: #44c2c7;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(68, 194, 199, 0.3);
          }

          .add-to-cart {
            background-color: #44c2c7;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
            font-weight: 600;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .add-to-cart:hover {
            background-color: #3aafb4;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(68, 194, 199, 0.3);
          }

          .products-section.in-view .product-card {
            opacity: 1;
            transform: translateY(0);
          }

          .product-card:nth-child(1) { transition-delay: 0.2s; }
          .product-card:nth-child(2) { transition-delay: 0.4s; }
          .product-card:nth-child(3) { transition-delay: 0.6s; }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2.2rem;
            }
            .section-subtitle {
              font-size: 1.1rem;
            }
            .products-grid {
              gap: 2rem;
            }
            .product-card {
              max-width: 350px;
              margin: 0 auto;
            }
          }

          @media (max-width: 600px) {
            .button-group {
              flex-direction: column;
              gap: 0.8rem;
            }
            .view-details, .add-to-cart {
              width: 100%;
              justify-content: center;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 2rem;
            }
            .section-subtitle {
              font-size: 1rem;
            }
          }
        `}
      </style>

      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">Explore our top natural products</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
              <div className="button-group">
                <NavLink 
                  to={product.path} 
                  className="view-details"
                  activeClassName="active" // Optional active class
                >
                  View Details
                </NavLink>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;