
        function createGrid(num) {
            for (i = 0; i < num; i++) {
                const row = document.createElement('div');
                row.classList.add('row');
                row.style.cssText = `height: ${100 / num}%`;

                for (j = 0; j < num; j++) {
                    const col = document.createElement('div');
                    col.classList.add('col');
                    col.style.cssText = `opacity: 0; width: ${100 / num}%`;
                    col.addEventListener('mouseover', drawGrid);//Function to draw in the grid
                    row.appendChild(col);
                };
                container.appendChild(row);
            };
        }

        function drawGrid() {
            this.style.backgroundColor = "#000";
            this.style.opacity = parseFloat(this.style.opacity) + 0.1;
        }

        function colorGrid() {
            const cells = document.querySelectorAll(".col")

            cells.forEach(function (cell) {
                cell.addEventListener("mouseover", function () {
                    const color = "#" + Math.random().toString(16).slice(2, 8);
                    this.style.background = color;
                    this.style.opacity = parseFloat(this.style.opacity) + 0.2;
                });
            });
        }

        function resetGrid() {
            const num = prompt("What size would you like the new grid to be?")
            container.innerHTML = "";
            createGrid(num);
        }

        const buttons = document.querySelectorAll('button');
        buttons[0].addEventListener('click', resetGrid);//Function to reset the grid;
        buttons[1].addEventListener('click', colorGrid);//Function to give random colors the grid;

        const container = document.querySelector('#container');
        createGrid(16);//Default Grid size(16x16)
