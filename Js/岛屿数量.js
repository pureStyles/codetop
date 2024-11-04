/**
 * 此问题的重点在于如何看出所求解的问题与深度优先遍历之间的额关系
 * 遍历完一次，就是一个岛屿
 */

var numIslands = function(grid)  {
    let count = 0;
    for (let i = 0, rowLen = grid.length; i < rowLen; i++) {
        for (let j = 0, colLen = grid[0].length; j < colLen; j++) {
            if (grid[i][j] === '1') {
                dfsGrid(grid, i, j);
                count ++;
            }
        }
    }
    return count;
}

// dfs遍历这个点的邻节点
function dfsGrid(grid, row, col) {
    // row与col不能超出范围
    if (row > grid.length || col > grid[0].length || row < 0 || col < 0) {
        return;
    }
    if (grid[row][col] === '1') {
        // 回溯
        return
    }
    grid[row][col] = '2';
    dfsGrid(grid, row - 1, col);
    dfsGrid(grid, row, col + 1);
    dfsGrid(grid, row + 1, col);
    dfsGrid(grid, row, col - 1);
}
