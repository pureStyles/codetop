

var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for (let i = 0, rows = grid.length; i < rows; i++) {
        for (let j = 0, cols = grid[0].length; j < cols; j++) {
            if (grid[i][j] === 1) {
                const area = dfs(grid, i, j, 0);
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
    }
    return maxArea;
}

function dfs(grid, row, col, area) {
    if (row >= grid.length || col >= grid[0].length || row < 0 || col < 0) {
        /**
         * 超出了边界
         */
        return 0
    }
    if (grid[row][col] !== 1) {
        return 0;
    }
    grid[row][col] = 2;
    return 1 + dfs(grid, row, col + 1) + dfs(grid, row + 1, col) + dfs(grid, row - 1, col) + dfs(grid, row, col - 1);
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

const ans = maxAreaOfIsland(grid);

console.log(ans);
