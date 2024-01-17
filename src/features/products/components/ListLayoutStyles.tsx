import styled from 'styled-components';

const ListLayoutWrapper = styled.div`
  display: flex;
  background-color: #e5e7eb;
  height: 800px;
`;

const Container = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  margin: 20px;
  
`;

const SelectedProductContainer = styled(Container)`
  width: 63%;
  margin-left: 5%;
  max-height: 600px;
  overflow: auto;
`;

const ProductImage = styled.img`
width: 40%;
height: 60%;
margin-top: 50px;
margin-left: 35%;
display: flex;
align-items: center;
justify-content: center;
`;

const ProductDetailsContainer = styled.div`
  margin-left: 20px;
  
`;

const PriceCartSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const QuantitySection = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-right: 5px;
  }
`;

const TotalPrice = styled.p`
  font-weight: bold;
`;

const AddToCartButton = styled.button`
  background-color: #3b82f6;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;

const ProductListContainer = styled(Container)`
  width: 40%;
  margin-right: 5%;
  overflow: auto;
  background-color: #E5E7EB;
  margin-top:1px;
  
`;

const ProductItem = styled.div`
  margin-bottom: 10px;
  border: 1px solid #ddd; // Changed to a light grey color for visibility
  background-color: white; // Slightly different background color for contrast
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
`;


const ListImage = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 10px;
`;

const ProductName = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: bold;
`;

const ProductDescription = styled.p`
  margin: 0;
  margin-bottom: 10px;
  font-size: 13px;
`;

const PriceDetailSection = styled.div`
  display: flex;
  align-items: center;
`;

const ProductPrice = styled.p`
  margin: 0;
  margin-right: 20px;
  font-weight: bold;
`;

const DetailButton = styled.button`
  background-color: white;
  color: #3b82f6;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

export {
    ListLayoutWrapper,
    SelectedProductContainer,
    ProductImage,
    ProductDetailsContainer,
    PriceCartSection,
    QuantitySection,
    TotalPrice,
    AddToCartButton,
    ProductListContainer,
    ProductItem,
    ListImage,
    ProductInfo,
    ProductName,
    ProductDescription,
    PriceDetailSection,
    ProductPrice,
    DetailButton,
    };