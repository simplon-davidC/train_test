for (var x = 1; x <= 100; x++){
    if(x % 3 && x % 5){
        document.write("Chaussettes Sales");
    }
    else {
        if (x % 3) {
            document.write("Chaussettes");
        }
        if (x % 5) {
            document.write("Sales");
        }
    }
    document.write('<br>');
}