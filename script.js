function test123(id) {
  var el = document.getElementById(id);
  if (el.value > 9999) {
    el.value = el.value.substring(0, 4);
  } else if (el.value < 0) {
    el.value = 0;
  }
}

try {
  var expireDateMonth = document.getElementById("expireDateMonth");
  for (let i = 1; i < 13; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerText = i;
    expireDateMonth.appendChild(opt);
  }

  var expireDateYear = document.getElementById("expireDateYear");
  for (let i = 2023; i < 2051; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.innerText = i;
    expireDateYear.appendChild(opt);
  }
} catch (error) {}

var products = [
  {
    id: 0,
    name: "5 Piece Crew Neck 100% Cotton Slim Fit Basic T-Shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: XX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 1,
    name: "Black Ultrasoft V Neck Plain Modal T-Shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 2,
    name: "Ecru Crew Neck Printed T-shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 3,
    name: "Navy Blue Crew Neck Printed T-shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 4,
    name: "Oil Green Crew Neck Printed T-shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 5,
    name: "White Crew Neck Printed T-shirt",
    options: [
      {
        id: 0,
        text: "SMALL",
        description: "Size: Small (S)",
        price: 29.99,
      },
      {
        id: 1,
        text: "MEDIUM",
        description: "Size: Medium (M)",
        price: 34.99,
      },
      {
        id: 2,
        text: "LARGE",
        description: "Size: Large (L)",
        price: 39.99,
      },
      {
        id: 3,
        text: "X-LARGE",
        description: "Size: X-Large (XL)",
        price: 49.99,
      },
      {
        id: 4,
        text: "XX-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 6,
    name: "Black and White Stone Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 7,
    name: "Black Botswana Agate Stone Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 8,
    name: "Black Double Leather Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 9,
    name: "Black Leather Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 10,
    name: "Claret Red Botswana Agate Stone Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 11,
    name: "Green Hematite Stone Bracelet",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Wrist Circumference:</strong> 13-14 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Wrist Circumference:</strong> 15-16 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Wrist Circumference:</strong> 17-18 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> L <strong>Wrist Circumference:</strong> 19-20 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Wrist Circumference:</strong> 21-22 cm",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 12,
    name: "2 Thread Jogger Sweatpants With Elastic Waistband",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 64 cm <strong>Hips:</strong> 88 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 67 cm <strong>Hips:</strong> 92 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 71 cm <strong>Hips:</strong> 96 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 75 cm <strong>Hips:</strong> 99 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 79 cm <strong>Hips:</strong> 102 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 13,
    name: "Black Antique Washed Lycra Skinny Fit Jean Trousers",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 65 cm <strong>Hips:</strong> 88 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 68 cm <strong>Hips:</strong> 92 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 72 cm <strong>Hips:</strong> 96 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 76 cm <strong>Hips:</strong> 99 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 80 cm <strong>Hips:</strong> 102 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 14,
    name: "Blue Slim Fit Lycra Jean Trousers",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 66 cm <strong>Hips:</strong> 88 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 69 cm <strong>Hips:</strong> 92 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 73 cm <strong>Hips:</strong> 96 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 77 cm <strong>Hips:</strong> 99 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 81 cm <strong>Hips:</strong> 102 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 15,
    name: "Navy Blue Side Pocket Crowbar Pattern Slim Fit Trousers",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 64 cm <strong>Hips:</strong> 89 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 70 cm <strong>Hips:</strong> 92 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 74 cm <strong>Hips:</strong> 96 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 78 cm <strong>Hips:</strong> 99 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 82 cm <strong>Hips:</strong> 102 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 16,
    name: "Navy Blue Striped W Leisure Fit Trousers with Side Pockets",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 65 cm <strong>Hips:</strong> 89 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 67 cm <strong>Hips:</strong> 93 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 71 cm <strong>Hips:</strong> 97 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 75 cm <strong>Hips:</strong> 100 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 79 cm <strong>Hips:</strong> 103 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 17,
    name: "White Plain Jogger Sweatpants",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> 34 <strong>Waist:</strong> 66 cm <strong>Hips:</strong> 89 cm", // 64-67  88-92
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> 36 <strong>Waist:</strong> 68 cm <strong>Hips:</strong> 93 cm", // 67-71  92-96
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> 38 <strong>Waist:</strong> 72 cm <strong>Hips:</strong> 97 cm", // 71-75  96-99
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> 40 <strong>Waist:</strong> 76 cm <strong>Hips:</strong> 100 cm", // 75-79  99-102
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description:
          "<strong>Size:</strong> 42 <strong>Waist:</strong> 80 cm <strong>Hips:</strong> 103 cm", // 79-83  102-105
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 18,
    name: "Beige Checked Cotton Lumberjack Regular fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 19,
    name: "Black Easy-iron Oxford Regular Fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 20,
    name: "Khaki Tree Printed Leisure Fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 21,
    name: "Navy Blue Abstract Pattern 100% Cotton Slim Fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 22,
    name: "Pink Easy-Iron Oxford Regular Fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
  {
    id: 23,
    name: "White Easy-Iron Oxford Slim Fit Shirt",
    options: [
      {
        id: 0,
        text: "X-SMALL",
        description:
          "<strong>Size:</strong> XS <strong>Collar Size:</strong> 13-14 cm <strong>Neck:</strong> 33-34.5 cm <strong>Chest:</strong> 81-87 cm <strong>Arm:</strong> 78-81 cm",
        price: 29.99,
      },
      {
        id: 1,
        text: "SMALL",
        description:
          "<strong>Size:</strong> S <strong>Collar Size:</strong> 15-16 cm <strong>Neck:</strong> 35.5-37 cm <strong>Chest:</strong> 88-94 cm <strong>Arm:</strong> 81-84 cm",
        price: 34.99,
      },
      {
        id: 2,
        text: "MEDIUM",
        description:
          "<strong>Size:</strong> M <strong>Collar Size:</strong> 17-18 cm <strong>Neck:</strong> 38-39.5 cm <strong>Chest:</strong> 96-102 cm <strong>Arm:</strong> 84-86 cm",
        price: 39.99,
      },
      {
        id: 3,
        text: "LARGE",
        description:
          "<strong>Size:</strong> XL <strong>Collar Size:</strong> 21-22 cm <strong>Neck:</strong> 43-44.5 cm <strong>Chest:</strong> 111-117 cm <strong>Arm:</strong> 89-91 cm",
        price: 49.99,
      },
      {
        id: 4,
        text: "X-LARGE",
        description: "Size: xX-Large (XXL)",
        price: 59.99,
      },
    ],
    selectedOption: 0,
  },
];

function addProduct(product) {
  var productEl = document.createElement("div");
  productEl.className = "product-card";

  var productPageA = document.createElement("a");
  productPageA.href = "imgs\\product" + product.id;
  productPageA.target = "_blank";
  productEl.appendChild(productPageA);

  // Add the product image
  var imageEl = document.createElement("img");
  imageEl.src = "imgs\\product" + product.id + "\\img0.jpg";
  imageEl.alt = "product image";
  productPageA.appendChild(imageEl);

  // Add the product name
  var nameEl = document.createElement("h3");
  nameEl.innerHTML = product.name;
  productEl.appendChild(nameEl);

  var defOpt = product.options[product.selectedOption];
  // Add the product description
  var descriptionEl = document.createElement("p");
  descriptionEl.className = "product-description";
  descriptionEl.innerHTML = defOpt.description;
  productEl.appendChild(descriptionEl);

  // Add the options dropdown
  var selectEl = document.createElement("select");
  selectEl.className = "product-options";
  selectEl.addEventListener("change", () => updateProduct(productEl, product));
  product.options.forEach((option) => {
    // Create an option element for each option in the product
    var optionEl = document.createElement("option");
    optionEl.value = option.id;
    optionEl.innerHTML = option.text;
    selectEl.appendChild(optionEl);
  });
  productEl.appendChild(selectEl);

  // Add a price element
  var priceEl = document.createElement("p");
  var priceElUnit = document.createElement("span");
  priceElUnit.className = "product-priceUnit";
  priceElUnit.innerHTML = "$";
  priceEl.appendChild(priceElUnit);
  var priceElValue = document.createElement("span");
  priceElValue.className = "product-priceVal";
  priceElValue.innerHTML = defOpt.price;
  priceEl.appendChild(priceElValue);
  productEl.appendChild(priceEl);

  // Add an "Add to Basket" button
  var buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Add to Basket";
  buttonEl.addEventListener("click", (a) => addToBasket(product));
  productEl.appendChild(buttonEl);

  // Add the product card element to the product listings
  let productsEl = document.getElementById("products");
  productsEl.appendChild(productEl);
}

function updateProduct(productEl, product) {
  var selectedEl = productEl.querySelector(".product-options");
  product.selectedOption = selectedEl.value;
  var currentOption = product.options[product.selectedOption];
  productEl.querySelector(".product-priceVal").innerHTML = currentOption.price;
  productEl.querySelector(".product-description").innerHTML =
    currentOption.description;
}

basket = [];

function addToBasket(product) {
  var found = false;
  for (var i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (
      element.element === product.id &&
      element.option === product.selectedOption
    ) {
      element.count++;
      found = true;
    }
  }
  if (!found) {
    basket.push({
      element: product.id,
      option: product.selectedOption,
      count: 1,
    });
  }
  updateBasket();
}

function updateBasket() {
  var totalPrice = 0;
  var basketEl = document.getElementById("selected-products");
  basketEl.innerHTML = "";

  var listEl = document.createElement("ul");
  basket.forEach((item) => {
    var itemEl = document.createElement("li");
    var product = products[item.element];
    var currOption = product.options[item.option];
    totalPrice += currOption.price * item.count;
    itemEl.innerHTML = `${product.name} - $${currOption.price.toFixed(2)} (${
      currOption.text
    }) (x${item.count})`;
    listEl.appendChild(itemEl);
  });
  basketEl.appendChild(listEl);

  document.getElementById("totalPrice").innerHTML = totalPrice.toFixed(2);
}

products.forEach(addProduct);
