import CarCatalog from "@/components/CarCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResponse = {
  success: true,
  count: 2,
  data: [
    {
      _id: "6522cf81fc9b7c60718f918a",
      model: "Accord",
      description: "Honda Accord",
      picture:
        "https://drive.google.com/uc?id=1Vsq3yGo0TbJtNnD-Q-GmIKEPhi774W_O",
      seats: 4,
      doors: 4,
      largebags: 2,
      smallbags: 2,
      automatic: true,
      dayRate: 2500,
      __v: 0,
      id: "6522cf81fc9b7c60718f918a",
    },
    {
      _id: "6522cfc6fc9b7c60718f918d",
      model: "Civic",
      description: "Honda Civic",
      picture:
        "https://drive.google.com/uc?id=1qZjh3CmMFGEik3lcPFZZCif58q4cqSFe",
      seats: 4,
      doors: 4,
      largebags: 2,
      smallbags: 1,
      automatic: true,
      dayRate: 1800,
      __v: 0,
      id: "6522cfc6fc9b7c60718f918d",
    },
  ],
};

describe("CarCatalog", () => {
  it("should have correct number of car images", async () => {
    const carCatalog = await CarCatalog({ carJson: mockResponse });
    render(carCatalog);

    await waitFor(() => {
      const carImages = screen.getAllByRole("img");
      expect(carImages.length).toBe(2);
    });
  });
});
