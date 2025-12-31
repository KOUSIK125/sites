// ✅ SUPABASE CONFIG (YOUR KEYS)
const supabaseUrl = "https://dykkwdafboodvqetptfz.supabase.co";
const supabaseKey =
  "sb_publishable_9NIbcSm_QreqQjhE7lJWkg_GfP_wnsW";

// ✅ CORRECT CLIENT CREATION
const supabase = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    document.getElementById("message").innerText = error.message;
  } else {
    window.location.href = "dashboard.html";
  }
}

// SIGNUP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    document.getElementById("message").innerText = error.message;
  } else {
    document.getElementById("message").innerText =
      "Signup successful! You can now log in.";
  }
}

// DASHBOARD USER CHECK
async function loadUser() {
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    window.location.href = "index.html";
  } else {
    document.getElementById("userEmail").innerText =
      "Logged in as: " + data.user.email;
  }
}

// LOGOUT
async function logout() {
  await supabase.auth.signOut();
  window.location.href = "index.html";
}

// AUTO LOAD DASHBOARD
if (window.location.pathname.includes("dashboard")) {
  loadUser();
}
