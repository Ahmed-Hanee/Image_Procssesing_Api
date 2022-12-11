import File from "../main";
it("FileName Is Incorrect ", async () => {
  const Err = await File.CreateOutput_Dir({
    ImageName: "encenadaports",
    ImageWidth: "507",
    ImageHeight: "910",
  });
  expect(Err).not.toBeNull();
});
/************************************************************************************************* */
describe("Sharp Building", () => {
  it("Width Input Value Is Unvalid", async () => {
    const Err = await File.CreateOutput_Dir({
      ImageName: "encenadaport",
      ImageWidth: "-450",
      ImageHeight: "689",
    });

    expect(Err).not.toEqual(null);
  });
});
