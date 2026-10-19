+const decorContainer = document.getElementById('decor-container');
+const colors = ['#ff85a2', '#ffb3c1', '#ffccd5', '#ff4d6d', '#fff0f3'];
+
+function createBalloon() {
+    const balloon = document.createElement('div');
+    balloon.className = 'balloon';
+
+    const color = colors[Math.floor(Math.random() * colors.length)];
+    balloon.style.backgroundColor = color;
+    balloon.style.left = Math.random() * 90 + 'vw';
+
+    const duration = Math.random() * 5 + 10;
+    balloon.style.animationDuration = duration + 's';
+
+    const string = document.createElement('div');
+    string.className = 'string';
+    balloon.appendChild(string);
+
+    decorContainer.appendChild(balloon);
+
+    setTimeout(() => {
+        balloon.remove();
+    }, duration * 1000);
+}
+
+function createConfetti() {
+    const confetti = document.createElement('div');
+    confetti.className = 'confetti';
+
+    const color = colors[Math.floor(Math.random() * colors.length)];
+    confetti.style.backgroundColor = color;
+    confetti.style.left = Math.random() * 100 + 'vw';
+    confetti.style.width = Math.random() * 8 + 5 + 'px';
+    confetti.style.height = confetti.style.width;
+    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
+
+    const duration = Math.random() * 3 + 4;
+    confetti.style.animationDuration = duration + 's';
+
+    decorContainer.appendChild(confetti);
+
+    setTimeout(() => {
+        confetti.remove();
+    }, duration * 1000);
+}
+
+
+setInterval(createBalloon, 2000);
+
+
+for(let i = 0; i < 30; i++) {
+    setTimeout(createConfetti, Math.random() * 3000);
+}
+
+
+setInterval(createConfetti, 400);
+
+
+for(let i = 0; i < 5; i++) {
+    setTimeout(createBalloon, i * 1000);
+}