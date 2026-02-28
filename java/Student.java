class Student{
    private int id;
    private String name;

    public Student(int id,String name){
        this.id=this.setId(id);
        this.name=this.setName(name);
    }

    public int setId(int id){
        return id;
    }

    public int getId(){
        return id;
    }

    public String getName(){
        return name;
    }
    public String setName(String name){
        return name;
    }
}