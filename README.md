# Scandiweb - Recruitment Task - Frontend

## Introduction
- The frontend was developed using React as a SPA (Single Page Application). 
- All pages are responsive and adjusted for mobile and desktop devices. 
- SASS with bootstrap grid system was used for the development of the frontend. 

<br>

## Pages

### 1. Product List Page
The Product List page is where all products are listed. The page is located in the following URL: `<base_url>/product/list.`

### 2. Product Add Page
The Product Add page is where new products can be added to the list. The page is located in the following URL: `<base_url>/product/add`.

The page includes a form where the user can enter the details of the new product, such as SKU, Name, Price, and the product type. Depending on the product type selected, the user must enter different information:
- For DVD-disc: Size (in MB)
- For Book: Weight (in Kg)
- For Furniture: Dimensions (HxWxL)

<br>

## Installation and Setup
To run the frontend, follow these steps:

1. Clone the repository.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your web browser and navigate to http://localhost:3000

<br>

## Final provisions
- The Backend is located here: [https://github.com/timkrysta/scandiweb-backend](https://github.com/timkrysta/scandiweb-backend)