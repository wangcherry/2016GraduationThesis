package com.msg.entity;

/**
 * Created by kx on 16/1/5.
 */
public class msg_type {
    private int mt_id;
    private String mt_name;

    @Override
    public String toString() {
        return "msg_type{" +
                "mt_id=" + mt_id +
                ", mt_name='" + mt_name + '\'' +
                '}';
    }

    public int getMt_id() {
        return mt_id;
    }

    public void setMt_id(int mt_id) {
        this.mt_id = mt_id;
    }

    public String getMt_name() {
        return mt_name;
    }

    public void setMt_name(String mt_name) {
        this.mt_name = mt_name;
    }
}
