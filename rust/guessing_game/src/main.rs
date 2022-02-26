use rand::Rng;
use std::cmp::Ordering;
use std::io; //prelude //trait

fn main() {
    println!("guessing game!");
    let secret_number = rand::thread_rng().gen_range(1, 101);
    println!("secret_number is {}", secret_number);
    println!("guess:");
    let mut guess = String::new();
    io::stdin()
        .read_line(&mut guess)
        .expect("can not read line");
    //shadow
    let guess: u32 = guess.trim().parse().expect("Please type a number");
    println!("what you guess is :{}", guess);
    match guess.cmp(&secret_number) {
        Ordering::Less => println!("Too small!"),  //arm
        Ordering::Greater => println!("Too big!"), //arm
        Ordering::Equal => println!("You win!"),   //arm
    }
}
