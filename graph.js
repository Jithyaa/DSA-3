class Graph {
    constructor() {
      this.adjacencyList = new Map(); 
    }
  
    addNode(node) {
      if (!this.adjacencyList.has(node)) {
        this.adjacencyList.set(node, []);
      }
    }
  
    addEdge(node1, node2) {
     
      this.adjacencyList.get(node1).push(node2);
  
      
      this.adjacencyList.get(node2).push(node1);
    }
  
    removeNode(node) {
    
      this.adjacencyList.delete(node);
  
      
      for (const adjacentNodes of this.adjacencyList.values()) {
        const index = adjacentNodes.indexOf(node);
        if (index !== -1) {
          adjacentNodes.splice(index, 1);
        }
      }
    }
  
    removeEdge(node1, node2) {
     
      const index1 = this.adjacencyList.get(node1).indexOf(node2);
      if (index1 !== -1) {
        this.adjacencyList.get(node1).splice(index1, 1);
      }
  
     
      const index2 = this.adjacencyList.get(node2).indexOf(node1);
      if (index2 !== -1) {
        this.adjacencyList.get(node2).splice(index2, 1);
      }
    }
  
    
  
    dfs(start) {
      const visited = new Set();
      const stack = [start];
  
      while (stack.length > 0) {
        const node = stack.pop();
  
        if (!visited.has(node)) {
          visited.add(node);
          console.log(node);
  
          for (const adjacentNode of this.adjacencyList.get(node)) {
            stack.push(adjacentNode);
          }
        }      }
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
  
      while (queue.length > 0) {
        const node = queue.shift();
  
        if (!visited.has(node)) {
          visited.add(node);
          console.log(node);
  
          for (const adjacentNode of this.adjacencyList.get(node)) {
            queue.push(adjacentNode);
          }
        }
      }
    }
  }
  
  
  const graph = new Graph();
  graph.addNode("A");
  graph.addNode("B");
  graph.addNode("C");
  graph.addNode("D");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "A");
  graph.addEdge("A", "C");
  graph.addNode("B","D")
  graph.dfs("A");