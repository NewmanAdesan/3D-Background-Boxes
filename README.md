

<p align="center">
  <img src="./ReadMe-Images/Web-Effect-Project-banner2.png">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/HTML-E34F26.svg" alt="HTML badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/CSS-1572B6.svg" alt="CSS badge" style="height: 25px;"> 
  <img src="https://img.shields.io/badge/JS-F7DF1E.svg" alt="JS badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Jest-C21325.svg" alt="Jest badge" style="height: 25px;">
  <img src="https://img.shields.io/badge/Web Effect-4AB2B4.svg" alt="Web Effect badge" style="height: 25px;">
</p>

  
# 3D-Background-Boxes: Web Animation &amp; Effect
  Three main concepts outlines the foundation of this project
  - background image decentralization
  - transistion via a class name
  - 3d box modelling with `::before` and `::after`


# Project Screenshots
<p align="center">
  <img src="./ReadMe-Images/project-screeshot1.jpg">
  <img src="./ReadMe-Images/project-screenshot3.jpg">
</p>

  
  
# Concept 1: background image decentralization
  basically we have 16 different elements of equal size (height & width)<br />
  using the same background image.
  
  Since the is bigger in size than the element,<br />
  each element shows a part of the background image
  
  This is implemented with the CSS properties:<br />
  `background-image`, `background-size`, `background-positioning`
  
  <img src="./ReadMe-Images/concept1-image1.svg" style="width:600px; height:auto">
  <img src="./ReadMe-Images/concept1-image2.svg" style="width:600px; height:auto">

  
  
# Concept 2: Transitioning via a class name
basically we styled our target element such that<br />
if it has a class called "big", two things would happen;
- it would have a different size <br />
- children of this our target element <br />
  would go through a transformation (rotateZ(360)) 

then we used javascript to toggle this class on/off from an element<br />
at the click of a button using the `classList.toggle()` method

<img src="./ReadMe-Images/concept2-image1.svg" style="width:600px; height:auto">
<img src="./ReadMe-Images/concept2-image2.svg" style="width:600px; height:auto">

  
  
# Concept 3: 3d box modelling with `::before` and `::after`
<img src="./ReadMe-Images/concept3-image1.png" style="width:600px; height:auto">
<img src="./ReadMe-Images/concept3-image2.svg" style="width:600px; height:auto">
<img src="./ReadMe-Images/concept3-image3.svg" style="width:600px; height:auto">



