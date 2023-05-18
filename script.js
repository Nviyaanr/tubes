function complex_abs(x) {
	return Math.sqrt(x.real*x.real + x.imag*x.imag);
}

const calcButton = document.getElementById("calc-button");
const realInput = document.getElementById("real");
const imagInput = document.getElementById("imag");
const result = document.getElementById("result");

calcButton.addEventListener("click", () => {
	const real = parseFloat(realInput.value);
	const imag = parseFloat(imagInput.value);

	if (isNaN(real) || isNaN(imag)) {
		result.textContent = "Masukkan bilangan kompleks dengan benar.";
	} else {
		const x = {real: real, imag: imag};
		const abs_x = complex_abs(x);
		result.textContent = `Nilai mutlak dari (${real} + ${imag}i) adalah ${abs_x.toFixed(2)}.`;
	}
});

realInput.addEventListener("input", () => {
	result.textContent = "";
});

imagInput.addEventListener("input", () => {
	result.textContent = "";
});