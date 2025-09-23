document.addEventListener('DOMContentLoaded', () => {
    const accessForm = document.getElementById('access-form');
    const idInput = document.getElementById('id-input');
    const accessCodeInput = document.getElementById('access-code-input');
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.querySelector('.main-content');
    const accessFormContainer = document.querySelector('.access-form-container');
    const logoutLink = document.getElementById('logout-link');

    const validCredentials = [
        { id: '87243-246-1', code: 'X22-J0N-55Y' },
        { id: '87563-342-2', code: 'H71-S8M-31R' },
        { id: '45643-675-3', code: 'G13-J0S-77E' },
        { id: '56325-353-4', code: 'M91-E4L-88Y' },
        { id: '23465-346-5', code: 'L15-W31-54Y' },
        { id: '35621-345-6', code: 'Z12-T33-78F' }
    ];

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            if (accessFormContainer) {
                accessFormContainer.classList.add('hidden');
            }
            if (mainContent) {
                mainContent.classList.remove('hidden');
            }
        }
    }

    if (accessForm) {
        accessForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const enteredId = idInput.value;
            const enteredCode = accessCodeInput.value;

            const isValid = validCredentials.some(cred => cred.id === enteredId && cred.code === enteredCode);

            if (isValid) {
                localStorage.setItem('isLoggedIn', 'true');
                checkLoginStatus();
            } else {
                errorMessage.classList.remove('hidden');
            }
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener('click', (e) => {
            e.preventDefault();
            localStorage.removeItem('isLoggedIn');
            window.location.reload();
        });
    }

    checkLoginStatus();
});
