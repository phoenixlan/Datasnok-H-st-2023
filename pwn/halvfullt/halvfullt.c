#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>


void secret_function() {
    FILE *flag_file;
    char flag_buffer[100];

    flag_file = fopen("flag.txt", "r");
    if (flag_file == NULL) {
        perror("Error opening flag file");
        exit(1);
    }

    if (fgets(flag_buffer, sizeof(flag_buffer), flag_file) != NULL) {
        printf("Flag: %s\n", flag_buffer);
    } else {
        printf("Error reading flag file\n");
    }

    fclose(flag_file);
}


int main(int argc, char** argv)
{
    printf("Heisann! Jeg er ikke så flink med data, ikke send for mye pls\n");

    volatile int cantoverflowme;
    char buffer[64];
 
    cantoverflowme = 0;
    gets(buffer);

    if (cantoverflowme != 0) {

        printf("Det var ikke pent gjort :(\n");
        secret_function();
    }
    else {
        printf("Tusen takk <3!\n");
    }
}