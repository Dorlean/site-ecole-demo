import { auth, db } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    msg.textContent = "Connexion...";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      // 1) Connexion Firebase Auth
      const cred = await signInWithEmailAndPassword(auth, email, password);

      // 2) Lire le profil dans Firestore (users/{uid})
      const uid = cred.user.uid;
      const ref = doc(db, "users", uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        msg.textContent = "Compte OK, mais profil manquant dans Firestore (users/uid).";
        return;
      }

      const data = snap.data();
      const role = data.role;

      // 3) Redirection selon rôle
      if (role === "parent") window.location.href = "dashboard.html";
      else if (role === "eleve") window.location.href = "dashboard.html";
      else if (role === "admin") window.location.href = "dashboard.html";
      else window.location.href = "dashboard.html";

    } catch (err) {
      msg.textContent = "Erreur: " + (err.message || err);
    }
  });
}