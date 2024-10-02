test("suma de los numeros [58, 11, 6, 2, 12, 67] debe ser 156", () =>{
    expect(sumaTotal([58, 11, 6, 2, 12, 67])).toBe(156);
})


test('verificar si pasa el texto a mayus', () => {
    const texto = "Test texto en Mayúsculas";
    const resultado = texto.toUpperCase();
      expect(resultado).toEqual("TEST TEXTO EN MAYÚSCULAS");
  });
test('verifica que el array tiene la longitud de 10', () => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    expect(array).toHaveLength(10);
  });

  test('verifica que el indice del número 4 del array es 3', () => {
    const array = [1,2,3,4,5,6,7,8,9,10];
    const index = array.indexOf(4);
    expect(index).toBe(3);
  });
  test('verifica si conctatenando estos dos arrays el resultado es [1,2,3,4,5,6]', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const resultado = array1.concat(array2);
    expect(resultado).toEqual([1, 2, 3,4, 5, 6]);
  });

  test('verifica si son son pares', () => {
    const numeros = [2, 4, 6, 8, 10];
    const resultado = numeros.map(numero => numero % 2 === 0);
    expect(resultado).toEqual([true, true, true, true, true]);
  });

