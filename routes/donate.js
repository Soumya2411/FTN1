<!DOCTYPE html>
<html>
  <head>
    <title>Donate Food</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: url('no-waste-food.jpg') no-repeat center center fixed;
        background-size: cover;
      }
      form {
        background-color: #fff;
        border-radius: 5px;
        padding: 20px;
        margin: 20px auto;
        width: 400px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      }
      label {
        display: block;
        margin-bottom: 10px;
      }
      input[type="text"],
      input[type="number"] {
        width: 100%;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin-bottom: 20px;
        box-sizing: border-box;
      }
      button[type="submit"] {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        width: 100%;
      }
      button[type="submit"]:hover {
        background-color: #3e8e41;
      }
    </style>
  </head>
  <body>
    <form>
      <label for="food-type">Type of food:</label>
      <input type="text" id="food-type" name="food-type" required>

      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" required>

      <button type="submit">Donate</button>
    </form>
  </body>
</html>
