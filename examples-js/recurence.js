//recurence

function recusiveFunc() {
  // do something
  if (something) {
    recusiveFunc();
  }
}

// practical example
let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}

let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);




// real world example:
//
const tree = {
    "value": 8,
    "left": {
        "value": 3,
        "left": {
            "value": 1,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": {
                "value": 4,
                "left": null,
                "right": null
            },
            "right": {
                "value": 7,
                "left": null,
                "right": null
            }
        }
    },
    "right": {
        "value": 10,
        "left": null,
        "right": {
            "value": 14,
            "left": {
                "value": 13,
                "left": null,
                "right": null
            },
            "right": null
        }
    }
}

const preorderTraverse = (node, array) => {
  if (!node) return array;
  array.push(node.value);
  array = preorderTraverse(node.left, array);
  array = preorderTraverse(node.right, array);
  return array;
};
const inorderTraverse = (node, array) => {
  if (!node) return array;
  array = inorderTraverse(node.left, array);
  array.push(node.value);
  array = inorderTraverse(node.right, array);
  return array;
};
const postorderTraverse = (node, array) => {
  if (!node) return array;
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);
  return array;
};
console.log(preorderTraverse(tree, []));
console.log(inorderTraverse(tree, []));
console.log(postorderTraverse(tree, []));
