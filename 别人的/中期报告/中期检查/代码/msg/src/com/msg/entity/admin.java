package com.msg.entity;

/**
 * Created by kx on 16/1/5.
 */
public class admin {
    private int a_id;
    private String a_username;
    private String a_password;
    private String a_name;

    @Override
    public String toString() {
        return "admin{" +
                "a_id=" + a_id +
                ", a_username='" + a_username + '\'' +
                ", a_password='" + a_password + '\'' +
                ", a_name='" + a_name + '\'' +
                '}';
    }

    public int getA_id() {
        return a_id;
    }

    public void setA_id(int a_id) {
        this.a_id = a_id;
    }

    public String getA_username() {
        return a_username;
    }

    public void setA_username(String a_username) {
        this.a_username = a_username;
    }

    public String getA_password() {
        return a_password;
    }

    public void setA_password(String a_password) {
        this.a_password = a_password;
    }

    public String getA_name() {
        return a_name;
    }

    public void setA_name(String a_name) {
        this.a_name = a_name;
    }
}
