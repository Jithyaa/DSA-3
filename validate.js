function isBST(root) {
    if (root === null) {
      return true;
    }
    if (root.left !== null && root.value < root.left.value) {
      return false;
    }
    if (root.right !== null && root.value > root.right.value) {
      return false;
    }
    return this.isBST(root.right) && this.isBST(root.left);
  }