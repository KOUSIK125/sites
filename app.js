const supabaseUrl = "https://dykkwdafboodvqetptfz.supabase.co";
const supabaseKey = "sb_publishable_9NIbcSm_QreqQjhE7lJWkg_GfP_wnsW";

const supabaseClient = window.supabase.createClient(
  supabaseUrl,
  supabaseKey
);

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabaseClient.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Login success");
    window.location.href = "dashboard.html"; // redirect
  }
}

// SIGNUP
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Signup success");
  }
}

// LOGOUT (for dashboard)
async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}
