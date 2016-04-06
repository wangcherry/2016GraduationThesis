package com.msg.entity;

/**
 * Created by kx on 16/1/5.
 */
public class user {
    private int u_id;
    private String u_username;
    private String u_password;
    private String u_name;

    @Override
    public String toString() {
        return "user{" +
                "u_id=" + u_id +
                ", u_username='" + u_username + '\'' +
                ", u_password='" + u_password + '\'' +
                ", u_name='" + u_name + '\'' +
                '}';
    }

    public int getU_id() {
        return u_id;
    }

    public void setU_id(int u_id) {
        this.u_id = u_id;
    }

    public String getU_username() {
        return u_username;
    }

    public void setU_username(String u_username) {
        this.u_username = u_username;
    }

    public String getU_password() {
        return u_password;
    }

    public void setU_password(String u_password) {
        this.u_password = u_password;
    }

    public String getU_name() {
        return u_name;
    }

    public void setU_name(String u_name) {
        this.u_name = u_name;
    }
}
