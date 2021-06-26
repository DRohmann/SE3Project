export class Ingredient {
    name: string;
    amount: string;
    unit: string;

    constructor(name: string, amount: string, unit: string) {
        this.name = name;
        this.amount = amount;
        this.unit = unit;
    }

    public toJSON(): object {
        return {
            name: this.name,
            amount: this.amount,
            unit: this.unit
        }
    }
}