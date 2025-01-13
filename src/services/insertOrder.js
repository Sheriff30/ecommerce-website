import supabase from "../supabaseClient";

async function insertOrder(orderData) {
  const { error } = await supabase.from("Orders").insert([orderData]);

  if (error) {
    console.error("Error inserting order");
  }
}

export default insertOrder;
