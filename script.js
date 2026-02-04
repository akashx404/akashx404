        observer.observe(el);
    });

    // Initialize YouTube thumbnail with fallback
    const youtubeThumbnail = document.querySelector('.video-thumbnail img');
    if(youtubeThumbnail) {
        // If YouTube thumbnail fails to load, use a fallback
        youtubeThumbnail.onerror = function() {
            this.src = 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
        };
    }

    // Add hover effect to profile image
    const profileImg = document.querySelector('.profile-img');
    if(profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            profileImg.style.transform = 'scale(1.05)';
        });
        
        profileImg.addEventListener('mouseleave', () => {
            profileImg.style.transform = 'scale(1)';
        });
    }

    // Add current year to copyright
    const copyrightElement = document.querySelector('.copyright');
    if(copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2026', currentYear);
    }

    // Add typing effect to tagline (optional enhancement)
    const tagline = document.querySelector('.tagline');
    if(tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }
});

// Console welcome message with updated links
console.log('%c👋 Welcome to Akash\'s Portfolio!', 'color: #00eaff; font-size: 18px; font-weight: bold;');
console.log('%c🎯 Developer: Mohammad Akash', 'color: #9bb1ff; font-size: 14px;');
console.log('%c🚀 GitHub: https://github.com/akashx404', 'color: #00ff9d; font-size: 14px;');
console.log('%c🎥 YouTube: https://youtube.com/@akashbotdev', 'color: #ff0000; font-size: 14px;');
console.log('%c📱 Telegram: https://t.me/akashbotdev', 'color: #0088cc; font-size: 14px;');
console.log('%c🤖 GOAT BOT: https://github.com/akashx404/GOAT-ADVANCED', 'color: #7289da; font-size: 14px;');
