"use strict";

const salaryModels = [
  { role: "開発のモデルケース", monthly: "37.5", annual: "450" },
  { role: "インフラのモデルケース", monthly: "52.5", annual: "630" },
  { role: "PMのモデルケース", monthly: "75", annual: "900" }
];

const salaryChoices = document.querySelector(".model-choices");
function renderSalary() {
  const selected = salaryChoices.querySelector("input:checked");
  const model = salaryModels[Number(selected.value)];
  document.getElementById("model-role").textContent = model.role;
  document.getElementById("annual").textContent = model.annual;
  document.getElementById("monthly").textContent = model.monthly;
}

salaryChoices.addEventListener("change", renderSalary);
window.addEventListener("pageshow", renderSalary);
renderSalary();

const menu = document.querySelector(".mobile-nav");
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) || event.target.closest(".mobile-nav a")) {
    menu.open = false;
  }
  const link = event.target.closest("a[data-action]");
  if (link) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "recruit_link_click",
      destination: link.dataset.action,
      placement: link.dataset.position
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.open) {
    menu.open = false;
    menu.querySelector("summary").focus();
  }
});
