       document.addEventListener('DOMContentLoaded', function() {
            // Get elements
            const calc = document.getElementById('calc');
            const buttons = document.querySelectorAll('.btn[data-value]');
            const clearBtn = document.getElementById('clearBtn');
            
            // Check if elements exist
            if (!calc) {
                console.error('CRITICAL ERROR: Calculator display not found!');
                return;  // Stop execution
            }
            
            console.log('Calculator found:', calc);  // Should show the input element
            
            buttons.forEach(button => {
                button.addEventListener('click', function() {
                    const value = this.dataset.value;
                    
                    if (value === '=') {
                        // Calculate
                        try {
                            calc.value = eval(calc.value);
                        } catch {
                            calc.value = 'Error';
                        }
                    } else {
                        // Append value
                        calc.value += value;
                    }
                });
            });
            
            if (clearBtn) {
                clearBtn.addEventListener('click', function() {
                    calc.value = '';
                });
            }
        });